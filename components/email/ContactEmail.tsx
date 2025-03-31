import * as React from "react";

interface EmailTemplateProps {
  name: string;
}

export default function EmailTemplate({ name }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
    </div>
  );
}
