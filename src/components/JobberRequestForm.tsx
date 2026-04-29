const FORM_URL =
  'https://clienthub.getjobber.com/client_hubs/92f3f5ef-eaaa-4f2c-9178-35059701f70a/public/work_request/embedded_work_request_form?form_id=426161';

export function JobberRequestForm() {
  return (
    <iframe
      src={FORM_URL}
      title="Service Request Form"
      className="w-full block border-0"
      style={{ minHeight: '900px' }}
    />
  );
}
