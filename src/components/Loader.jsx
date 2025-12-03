/**
 * Loader component for loading state
 * @param {Object} props
 * @param {string} props.content
 * @returns {JSX.Element}
 */
function Loader({ content = "Loading..." }) {
  return <div className={`loader before:content-["${content}"]`}></div>;
}

export default Loader;
