function SqiPage({ onBack }) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <button onClick={onBack} style={{ marginBottom: '20px', padding: '10px' }}>
        ← Back to Home
      </button>
      
      <h1>My Design Playground</h1>
      <p>Start experimenting with your styles and layouts here!</p>

      {/* Add your experimental designs here */}
      <div style={{ 
        width: '200px', 
        height: '200px', 
        backgroundColor: 'blue', 
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px'
      }}>
        Box Design
      </div>
    </div>
  );
}

export default SqiPage;