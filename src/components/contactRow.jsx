
export default function ContactRow({contact}) {
  return (
    <tr>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.name}</td>
    </tr>
  );
}