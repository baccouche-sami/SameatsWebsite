// API utilities for form submissions - Optimized Brevo integration

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  type: 'contact' | 'quote';
  restaurantName?: string;
  restaurantType?: string;
  address?: string;
  website?: string;
  currentSolution?: string;
  urgency?: string;
  needsApp?: boolean;
  needsDelivery?: boolean;
  locations?: string;
  services?: string;
  budget?: string;
  timeline?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  id?: string;
  emailSent?: boolean;
  errors?: any[];
}

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Network error occurred'
    };
  }
}

export async function subscribeNewsletter(email: string): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return {
      success: false,
      message: 'Network error occurred'
    };
  }
}