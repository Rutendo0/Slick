import React from "react";

interface MapEmbedProps {
  height?: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({ height = "300px" }) => (
  <div className="w-full rounded-lg overflow-hidden shadow">
    <iframe
      title="Slick Logistics Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sPlaceholder+Location!5e0!3m2!1sen!2sau!4v1611816611234!5m2!1sen!2sau"
      width="100%"
      height={height}
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default MapEmbed; 