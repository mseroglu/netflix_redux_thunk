

const Error = ({ err }) => {
  
  return (
    <div className="mt-10 bg-red-600 rounded p-3">
      <h2>Üzgünüz bir hata oluştu</h2>
      <h3>HATA KODU: {err}</h3>
    </div>
  )
}

export default Error
