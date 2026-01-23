import { Description } from "@/components/custom/description";
import { Globe, MapPin, Phone } from "lucide-react";
import NaxaLogo from "@/assets/images/naxa_logo.png";
import { createRoot } from "react-dom/client";

const NaxaDetail = () => {
  return (
    <div className="w-full space-y-2">
      <img src={NaxaLogo} alt="NAXA Logo" className="h-6" />
      <Description variant="small">
        Equipping Humankind with Geo-Intelligence Solutions to make Informed
        Decisions
      </Description>
      <Paragraph icon={<Phone className="h-4 w-4 text-muted" />}>
        014516543
      </Paragraph>
      <Paragraph icon={<Globe className="h-4 w-4 text-muted" />}>
        www.naxa.com.np
      </Paragraph>
      <Paragraph icon={<MapPin className="h-6 w-6 text-muted" />}>
        Omkareshwor Mandir Road, Kathmandu 44600
      </Paragraph>
    </div>
  );
};

export default NaxaDetail;

const Paragraph = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) => (
  <p className="text-sm text-primary flex items-center gap-2">
    {icon} {children}
  </p>
);

export const NaxaDetailPopup = document.createElement("div");
const root = createRoot(NaxaDetailPopup);
root.render(<NaxaDetail />);
