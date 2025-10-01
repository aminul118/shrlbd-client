const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Contact Information</h3>
      <div className="text-muted-foreground space-y-2">
        <p>
          <span className="text-foreground font-medium">Address:</span>
          <br />
          278, 1 W Monipur, Mirpur, Dhaka 1216
        </p>
        <p>
          <span className="text-foreground font-medium">Email:</span>
          <br />
          <a
            href="mailto:info@shrlbd.com"
            className="text-primary hover:underline"
          >
            info@shrlbd.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
