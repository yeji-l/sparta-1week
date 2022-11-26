import React from 'react';
import './App.css';
// 할 일 정리
// 1. 뷰 제작
    //임의로 카드 하나 만들기
// 2. 입력한 내용추가 (state 사용)
// 3. state에 추가한 내용을 리스트에 뿌리기
// justiftcontent에서 원하는 정렬 방식 선택하기
// 너무 위에 달라붙지 않도록 
// til-list와 til_list는 다르다.

function App() {
  const [til_list, setTilList] = React.useState([]);
  const title_ref = React.useRef(null);
  const content_ref = React.useRef(null);
  const time_ref = React.useRef(null);

  const addTIL = () => {
    const til_data = {
      title: title_ref.current.value,
      content: content_ref.current.value,
      time: time_ref.current.value,
    };

    // 콘솔로 확인해요!
    console.log(til_data);

    // state에 저장해요!
    setTilList([...til_list, til_data]);

    // 인풋은 지워줍시다! :)
    title_ref.current.value = "";
    content_ref.current.value = "";
    time_ref.current.value = "";
  };

  return (
    <div className="App">
      <div style={
        {
          display: "flex",
          gap:"1rem",
          justifyContent: "space-around",
          margin : "2rem"
        }
      }>
        <div style={{
          width: "60vmin"
        }}>
          <div className='til-area'
          style={{
            borderBottom: "1px solid #CCC",

          }}>
            <h1>TIL</h1>
          </div>
          <div className="til-list">
          {til_list.map((til, idx) => {
            return (
              <div
                className="til-item"
                key={idx}
                style={{
                  border: "1px solid #888",
                  marginBottom: "2rem",
                  padding: ".5rem",
                }}
              >
                <h3>{til.title}</h3>
                <p>{til.content}</p>
                <p>{til.time}</p>
              </div>
            );
          })}
        </div>
        </div>
        <div className='inputarea'
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
        }}>
          <div>
            <span>과목</span>
            <input ref={title_ref}/>
          </div>
          <div>
            <span>내용</span>
            <input ref={content_ref}/>
          </div>
          <div>
            <span>공부시간</span>
            <input ref={time_ref}/>
          </div>
          <button style={{
            border: "none",
            padding: "1rem",
            background: "yellow"
          }} onClick={addTIL}
          >추가하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;
