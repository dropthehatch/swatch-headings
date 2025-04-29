export function FontDropdown({ selectedFont, setSelectedFont }) {
    const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
  
    return (
      <select
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
        className="border p-2 rounded shadow-md"
      >
        {fonts.map((font) => (
          <option key={font} value={font} style={{ fontFamily: font }}>
            {font}
          </option>
        ))}
      </select>
    );
  }
  