

export default function ContactRow({contact, SetSelectedContactID}) {
  return (
    <tr onClick={() => {
      SetSelectedContactID(contact.id);
    }}>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.name}</td>
    </tr>
  );
}