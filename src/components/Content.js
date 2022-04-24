const Content = ({ data, curPos, path }) => {
  const dataPoint = data && data.dataPoints[curPos];
  return (
    <>
      {data && (
        <div className="content">
          <div>
            <h2>{data.title}</h2>
          </div>

          <div>
            <div className="image-box">
              <img src={path + dataPoint.image} alt={"equipment shown"} />
            </div>
            <div className="content-para">
              <h5 className="image-caption">
                {dataPoint.caption} ({dataPoint.year})
              </h5>
              {dataPoint &&
                dataPoint.paras.map((para, idx) => {
                  return <p key={idx}>{para}</p>;
                })}
            </div>
          </div>

          <div className="source">{data.source}</div>
        </div>
      )}
    </>
  );
};

export default Content;
