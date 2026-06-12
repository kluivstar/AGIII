/**
 * Service to handle contact form submissions.
 * Currently configured for Web3Forms but designed to be easily swapped
 * to another provider (such as a backend endpoint integration with Resend) in the future.
 */

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

/**
 * Submits the contact form data.
 * @param {Object} data - The sanitized form data.
 * @returns {Promise<Object>} The response from the submission provider.
 */
export async function submitContactForm(data) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error('Form submission is misconfigured. Please check environment variables.');
  }

  // Build the payload for Web3Forms
  const payload = {
    access_key: accessKey,
    subject: 'New Inquiry from AG3 Management LLC Site',
    from_name: 'AG3 Management Site',
    name: data.name,
    email: data.email,
    organization: data.organization || 'Not provided',
    phone: data.phone || 'Not provided',
    service: data.service || 'General Inquiry',
    message: data.message,
    // Web3Forms botcheck field for spam/bot prevention
    botcheck: data.botcheck
  };

  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Submission failed.');
  }

  return result;
}
