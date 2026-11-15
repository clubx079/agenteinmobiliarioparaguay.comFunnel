// Headlines and text. next/font needs literal options in every call.
import { Lora, IBM_Plex_Sans } from 'next/font/google';

const serif = Lora({ subsets: ['latin'], display: 'swap', variable: '--f-serif' });
const sans = IBM_Plex_Sans({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '600'], variable: '--f-sans' });

/** The two variable class names for <html>. */
export const fontClasses = `${serif.variable} ${sans.variable}`;
