import { useRef } from "react";
function Problem3() {
  const inputRef = useRef(null);

  return (
    <>
      <div style={{ display: 'block' }}>
        Input 1: <input type='text' ref={inputRef}/>
      </div>
      <div style={{ display: 'block' }}>
        Input 2: <input type='text' ref={inputRef}/>
      </div>
      <div style={{ display: 'block' }}>
        Input 3: <input type='text' ref={inputRef}/>
      </div>
      <div style={{ display: 'block' }}>
        Input 4: <input type='text' ref={inputRef}/>
      </div>
      <div style={{ display: 'block' }}>
        Input 5: <input type='text' ref={inputRef}/>
      </div>
      <div style={{ display: 'block' }}>
        Input 6: <input type='text' ref={inputRef}/>
      </div>
      <div style={{ display: 'block' }}>
        Input 7: <input type='text' ref={inputRef}/>
      </div>
      <div style={{ display: 'block' }}>
        Input 8: <input type='text' ref={inputRef}/>
      </div>
      <div style={{ display: 'block' }}>
        Input 9: <input type='text' ref={inputRef}/>
      </div>
      <div style={{ display: 'block' }}>
        Input 10: <input type='text' ref={inputRef}/>
      </div>
      <button type='button'>I'm a button</button>
    </>
  );
}

export default Problem3;
//Students must programatically focus/select on the empty textbox when
//the users click the button.
