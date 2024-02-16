function LoadingSpinner() {
  return (
    <div className="flex justify-center">
      <div
        className="animate-spin border border-black rounded-full border-r-8"
        role="status"
        style={{ width: "3rem", height: "3rem", margin: "200px 0" }}
      ></div>
    </div>
  );
}
export default LoadingSpinner;
