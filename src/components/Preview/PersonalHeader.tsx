function PersonalHeader({ name, email, phone, linkedin, summary }) {
  return (
    <div className="mb-6">
      {/* Nome */}
      <h2 className="text-2xl font-bold mb-2">{name || "Seu Nome"}</h2>

      {/* Contatos */}
      <p className="text-gray-600">
        {email && <span>{email}</span>}
        {phone && <span> | {phone}</span>}
        {linkedin && (
          <span>
            {" "}
            | <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">{linkedin}</a>
          </span>
        )}
      </p>

      {/* Resumo */}
      <p className="mt-4 text-gray-700 italic">
        {summary || "Clique em 'Resumo Profissional' no formulário para escrever seu perfil."}
      </p>
    </div>
  );
}

export default PersonalHeader;
