import NavigationBar from "@/components/NavigationBar";
import { ProdukHoverProvider } from '../context/ProdukHoverContext';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

export default function ClientLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen">
      <div className="w-full h-full p-0 m-0 flex flex-col">
        <ProdukHoverProvider>
          <div className="fixed z-[1000]">
            <NavigationBar />
          </div>
          <div className="mt-[10px] h-full w-full overflow-x-hidden overflow-y-auto">
            {children}
          </div>
        </ProdukHoverProvider>
      </div>
    </div>
  );
}