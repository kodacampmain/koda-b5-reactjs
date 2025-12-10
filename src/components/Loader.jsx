/**
 * Loader component for loading state
 * @param {Object} props
 * @param {string} props.content
 * @returns {JSX.Element}
 */
function Loader(props) {
  return (
    <div
      className={`loader animate-(--animation-loading) before:content-["Loading..."] ${props.className}`}
    ></div>
  );
}

export default Loader;
