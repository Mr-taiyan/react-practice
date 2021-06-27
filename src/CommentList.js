// eslint-disable-next-line import/no-anonymous-default-export
export default ({ data = [] }) => {
  return (
    <div className="exp-09-comment-list">
      <h3>Comments ({data.length})</h3>
      <dl>
        {data.map((item) => {
          return (
            <>
              <dt key={item.id}>{item.user}</dt>
              <dd>{item.content}</dd>
            </>
          );
        })}
      </dl>
    </div>
  );
};
