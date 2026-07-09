export default function ActivacionPage() {
  return (
    <main style={{ minHeight:'100vh', background:'#071828', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 24px' }}>
      <div style={{ maxWidth:560, width:'100%', textAlign:'center' }}>
        <div style={{ fontSize:52, marginBottom:20 }}>🎟️</div>
        <h1 style={{ fontSize:32, fontWeight:800, color:'white', marginBottom:12 }}>
          Códigos de activación COGNIVA
        </h1>
        <p style={{ fontSize:16, color:'#94A3B8', lineHeight:1.7, marginBottom:36 }}>
          Los códigos de activación COGNIVA te permiten acceder a los planes Plus, Premium o Elite sin pasar por las tiendas de apps.
        </p>
        <div style={{ background:'#0C1E32', border:'1px solid rgba(14,207,170,0.2)', borderRadius:16, padding:32, marginBottom:24, textAlign:'left' }}>
          <h2 style={{ fontSize:18, fontWeight:700, color:'white', marginBottom:16 }}>¿Cómo obtengo un código?</h2>
          {[
            { icon:'🌐', t:'Compra directa en nuestra web', d:'Próximamente disponible en cognivaapp.com/pagar' },
            { icon:'✉️', t:'Escríbenos por correo', d:'pagos@cognivaapp.com — respondemos en menos de 24h' },
            { icon:'🤝', t:'Convenios institucionales', d:'Para hospitales, clínicas y redes de salud — contacto@cognivaapp.com' },
            { icon:'📱', t:'Referidos', d:'Invita a un colega y recibe 1 mes gratis. Abre la app → Planes → Tu código de referido' },
          ].map(item => (
            <div key={item.t} style={{ display:'flex', gap:14, marginBottom:20 }}>
              <span style={{ fontSize:24, flexShrink:0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize:15, fontWeight:600, color:'white', marginBottom:4 }}>{item.t}</div>
                <div style={{ fontSize:13, color:'#94A3B8' }}>{item.d}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background:'rgba(14,207,170,0.06)', border:'1px solid rgba(14,207,170,0.2)', borderRadius:12, padding:20, marginBottom:28 }}>
          <p style={{ fontSize:13, color:'#0ECFAA', fontWeight:600, marginBottom:6 }}>¿Ya tienes tu código?</p>
          <p style={{ fontSize:13, color:'#94A3B8' }}>Abre COGNIVA → toca "Activar código" en la pantalla de Planes → ingresa tu código CGNV-XXXX-XXXX-XXXX</p>
        </div>
        <a href="/" style={{ color:'#0ECFAA', fontSize:14, fontWeight:600, textDecoration:'none' }}>← Volver al inicio</a>
      </div>
    </main>
  );
}
