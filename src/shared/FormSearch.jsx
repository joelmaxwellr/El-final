

const FormSearch = ({ onSubmit, onChange }) => {
  return (
    <div >
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default FormSearch;
