

function Ayudar() {
  return (
    <>
      <div
        className="ayudar"
        style={{
          color: "var(--letra-v)",
          padding: "10px",
          maxWidth: "90%",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <h2 style={{ fontSize: "25px", marginBottom: "5px" }}>¿Cómo ayudar?</h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.15",
            textAlign: "justify",
          }}
        >
          Uno de los mayores riesgos para las especies endémicas y sus
          ecosistemas son los animales de tenencia doméstica, es decir, perrxs y
          gatxs. Por eso, a continuación les dejamos pequeñas acciones con las y
          consejos con los que puedes ser un aporte para la causa:
          <br />
          <br />
          <li>Limpieza y cuidado de espacios al visitarlos.</li>
          <li>No llevar mascotas a las reservas.</li>
          <li>Adoptar a los animales abandonados cerca del área.</li>
          <br />
          Tambien, dejamos fundaciones a las que podrías recurrir:
        </p>
      </div>
    </>
  );
}

export default Ayudar;
