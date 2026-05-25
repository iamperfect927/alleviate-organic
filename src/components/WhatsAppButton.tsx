'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { herbs } from '../data/herbs';

export default function WhatsAppButton() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Helper to determine the pre-filled WhatsApp message
  const getWhatsAppUrl = () => {
    const phoneNumber = "1234567890"; // Mock business number (User can replace with actual)
    let message = "Hi, I am on the Alleviate Organic website and have a question about your raw African herbal powders.";

    if (pathname === '/') {
      message = "Hi, I am on the Alleviate Organic home page and have a question about your raw African herbal powders.";
    } else if (pathname.startsWith('/herbs/')) {
      const herbId = pathname.split('/').pop();
      const herb = herbs.find(h => h.id === herbId);
      if (herb) {
        message = `Hi, I am on the Alleviate Organic website looking at ${herb.name} (${herb.scientificName}) and have a question before checking out...`;
      }
    } else if (pathname.startsWith('/checkout')) {
      const herbId = searchParams.get('product');
      const herb = herbs.find(h => h.id === herbId);
      if (herb) {
        message = `Hi, I am completing my checkout for ${herb.name} on Alleviate Organic and have a question about the payment or shipping process...`;
      } else {
        message = "Hi, I am completing my checkout on Alleviate Organic and have a question about the checkout process...";
      }
    }

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-brand-whatsapp hover:scale-105 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-brand-whatsapp focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Contact support on WhatsApp"
      id="whatsapp-floating-support-btn"
    >
      {/* Pulsing Outer Ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-brand-whatsapp opacity-75 animate-ping -z-10 group-hover:animate-none"></span>
      
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.417 9.864-9.855.002-2.635-1.022-5.11-2.884-6.974-1.864-1.864-4.343-2.89-6.984-2.891-5.439 0-9.865 4.419-9.867 9.856-.001 1.636.43 3.226 1.25 4.633L1.9 21.026l4.747-1.872zm11.381-6.903c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.644.145-.191.29-.738.942-.905 1.134-.167.19-.334.212-.624.067-.29-.145-1.222-.45-2.328-1.436-.86-.767-1.44-1.716-1.607-2.007-.167-.29-.018-.447.127-.591.13-.13.29-.338.436-.508.145-.17.194-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.644-1.55-.882-2.122-.232-.559-.467-.482-.644-.491-.167-.008-.358-.01-.55-.01s-.502.072-.764.358c-.262.29-1 .977-1 2.388 0 1.41 1.026 2.775 1.17 2.969.145.193 2.019 3.082 4.892 4.322.684.295 1.218.471 1.634.603.687.218 1.312.187 1.806.114.55-.082 1.716-.7 1.96-1.376.244-.676.244-1.255.172-1.376-.073-.12-.262-.193-.553-.338z" />
      </svg>
    </a>
  );
}
