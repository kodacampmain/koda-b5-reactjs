/**
 * Loader component for loading state
 * @param {Object} props
 * @param {string} props.content
 * @returns {JSX.Element}
 */
function Loader() {
  return <div className={`loader animate-(--animation-loading) before:content-["Loading..."]`}></div>;
}

export default Loader;
