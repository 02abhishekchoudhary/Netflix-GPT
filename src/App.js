import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div>
      <h1 className="text-4xl text-red-500 font-bold">Hey It's me</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
