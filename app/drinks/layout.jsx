const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>example code</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
