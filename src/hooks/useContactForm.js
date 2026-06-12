import { useState } from 'react';
import { submitContactForm } from '../services/contactService';

const INITIAL_VALUES = {
  name: '',
  email: '',
  organization: '',
  phone: '',
  service: '',
  message: '',
  botcheck: ''
};

export function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Simple input sanitization: trim strings, escape basic HTML tags
  const sanitizeValue = (value) => {
    if (typeof value !== 'string') return value;
    return value
      .trim()
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = () => {
    const tempErrors = {};

    // Name validation
    if (!values.name.trim()) {
      tempErrors.name = 'Full name is required.';
    }

    // Email validation
    const trimmedEmail = values.email.trim();
    if (!trimmedEmail) {
      tempErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        tempErrors.email = 'Please enter a valid email address.';
      }
    }

    // Message validation
    if (!values.message.trim()) {
      tempErrors.message = 'Message is required.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setSubmitError(null);

    // Run client-side validation
    const isValid = validate();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      // 1. Honeypot check: if botcheck is filled, fail silently or simulate success to trap bots
      if (values.botcheck) {
        console.warn('Honeypot triggered. Silent success response simulated.');
        // Simulate a tiny network delay then claim success
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmitSuccess(true);
        setValues(INITIAL_VALUES);
        setErrors({});
        return;
      }

      // 2. Sanitize form values
      const sanitizedData = {
        name: sanitizeValue(values.name),
        email: sanitizeValue(values.email),
        organization: sanitizeValue(values.organization),
        phone: sanitizeValue(values.phone),
        service: values.service, // select dropdown values are predefined
        message: sanitizeValue(values.message),
        botcheck: ''
      };

      // 3. Submit data to the service
      await submitContactForm(sanitizedData);

      setSubmitSuccess(true);
      setValues(INITIAL_VALUES);
      setErrors({});
    } catch (err) {
      console.error('Submission error:', err);
      // User-friendly error message, hiding technical details as per security requirements
      setSubmitError('An unexpected error occurred while sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  return {
    values,
    errors,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleSubmit,
    resetForm
  };
}
