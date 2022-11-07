type Props = {
  scale?: number;
};

const Loader = (props: Props) => {
  const { scale = 3 } = props;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <div
        className="branch-loader"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="stick"></div>
        <div className="leaf leaf-top leaf-top-left"></div>
        <div className="leaf leaf-top leaf-top-right"></div>
        <div className="leaf leaf-bottom leaf-bottom-left"></div>
        <div className="leaf leaf-bottom leaf-bottom-right"></div>
      </div>
    </div>
  );
};

export default Loader;
