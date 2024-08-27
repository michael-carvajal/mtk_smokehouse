import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from './_components/Navbar';
import Providers from './providers'
import DashboardNavBar from "./_components/DashboardNavBar";
export const metadata: Metadata = {
  title: "MT. Kisco Smokehouse",
  description: "Come find your next favorite seafood products",
  icons: [{ rel: "icon", url: "/mtk_photos/logo.jpg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex gap-10 flex-col items-center  bg-gradient-to-b from-[#fffef7] to-[#feffee] text-white min-h-screen">
        <Providers>
          <Navbar />
          <DashboardNavBar />
          {children}
        </Providers>
        <footer className="py-6 md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              <span className="mr-6">&copy; 2024 Mt. Kisco Smokehouse</span>
              <a href="https://www.facebook.com/mountkiscosmokehouse/" target="_blank" rel="noreferrer" className="mr-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook inline"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
              <a href="https://www.yelp.com/biz/mt-kisco-smokehouse-mount-kisco" target="_blank" rel="noreferrer" className="mr-6"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-yelp inline" viewBox="0 0 16 16">
                <path d="m4.188 10.095.736-.17.073-.02A.813.813 0 0 0 5.45 8.65a1 1 0 0 0-.3-.258 3 3 0 0 0-.428-.198l-.808-.295a76 76 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.1 2.1 0 0 0-.606-.116.72.72 0 0 0-.572.245 2 2 0 0 0-.105.132 1.6 1.6 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.8.8 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566zm8.219-3.911a4.2 4.2 0 0 0-.8-1.14 1.6 1.6 0 0 0-.275-.21 2 2 0 0 0-.15-.073.72.72 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575q-.51.516-1.01 1.042l-.598.62a3 3 0 0 0-.298.365 1 1 0 0 0-.157.364.8.8 0 0 0 .007.301q0 .007.003.013a.81.81 0 0 0 .945.616l.074-.014 3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.8.8 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308M6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05q-.278.038-.553.104a8 8 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857q.033.015.068.025c.15.057.313.068.469.032l.028-.007a.8.8 0 0 0 .377-.226zm-.276 3.161a.74.74 0 0 0-.923-.234 1 1 0 0 0-.145.09 2 2 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705q-.435.591-.861 1.193c-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.7.7 0 0 0-.03.314c.013.11.05.217.108.312q.046.07.1.138a1.6 1.6 0 0 0 .257.237 4.5 4.5 0 0 0 2.196.76 1.6 1.6 0 0 0 .349-.027 2 2 0 0 0 .163-.048.8.8 0 0 0 .278-.178.7.7 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821q.037-.735.06-1.469l.033-.87a2.1 2.1 0 0 0-.055-.623 1 1 0 0 0-.117-.27Zm5.783 1.362a2.2 2.2 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398q-.644-.353-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a2 2 0 0 0-.466-.166 1 1 0 0 0-.17-.018.74.74 0 0 0-.725.616 1 1 0 0 0 .01.293c.038.204.13.406.224.583l.41.768q.341.65.696 1.294c.152.28.28.52.398.719q.036.057.068.112c.145.239.261.39.379.497a.73.73 0 0 0 .596.201 2 2 0 0 0 .168-.029 1.6 1.6 0 0 0 .325-.129 4 4 0 0 0 .855-.64c.306-.3.577-.63.788-1.006q.045-.08.076-.165a2 2 0 0 0 .051-.161q.019-.083.029-.168a.8.8 0 0 0-.038-.327.7.7 0 0 0-.165-.27" />
              </svg></a>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g48212-d7988735-Reviews-Mt_Kisco_Smokehouse-Mount_Kisco_New_York.html" target="_blank" rel="noreferrer" className="mr-6"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve" width="16" height="16" className="inline">
                <path d="M22.038,8.783L24,6.649h-4.35c-2.178-1.488-4.808-2.354-7.652-2.354c-2.841,0-5.463,0.868-7.637,2.354H0l1.962,2.134  c-1.202,1.097-1.956,2.677-1.956,4.432c0,3.311,2.684,5.995,5.995,5.995c1.573,0,3.006-0.607,4.076-1.598l1.922,2.092l1.922-2.091  c1.07,0.992,2.501,1.596,4.074,1.596c3.311,0,5.999-2.684,5.999-5.995C23.995,11.459,23.241,9.879,22.038,8.783z M6.003,17.273  c-2.241,0-4.057-1.816-4.057-4.057c0-2.241,1.816-4.058,4.057-4.058s4.057,1.816,4.057,4.058  C10.06,15.456,8.244,17.273,6.003,17.273z M12,13.097c0-2.67-1.942-4.962-4.504-5.941c1.386-0.579,2.906-0.901,4.502-0.901  c1.596,0,3.118,0.321,4.504,0.901C13.942,8.137,12,10.427,12,13.097z M17.995,17.273c-2.241,0-4.058-1.816-4.058-4.057  c0-2.241,1.816-4.058,4.058-4.058s4.057,1.816,4.057,4.058C22.053,15.456,20.237,17.273,17.995,17.273z M17.995,11.086  c-1.175,0-2.127,0.952-2.127,2.127c0,1.175,0.952,2.127,2.127,2.127c1.175,0,2.127-0.952,2.127-2.127  C20.122,12.04,19.171,11.086,17.995,11.086z M8.13,13.215c0,1.175-0.952,2.127-2.127,2.127c-1.175,0-2.127-0.952-2.127-2.127  c0-1.175,0.952-2.127,2.127-2.127C7.178,11.086,8.13,12.04,8.13,13.215z" /></svg></a>
              <a href="https://michael-carvajal-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">Created by Michael Carvajal</a>

            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
