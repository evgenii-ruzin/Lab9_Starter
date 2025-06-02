try {
  let form = document.querySelector('form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  });

  let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

  errorBtns[0].addEventListener('click', () => { //console log
    console.log("Console log tested");
  });

  errorBtns[1].addEventListener('click', () => { //console error
    console.error("Console error tested");
  });

  errorBtns[2].addEventListener('click', () => { //console count
    console.count("Count tested");
  });

  errorBtns[3].addEventListener('click', () => { //console warn
    console.warn("Console warn tested");
  });

  errorBtns[4].addEventListener('click', () => { //console assert
    const t = true;
    const f = false;
    const reason = "true is not false because true is true";
    console.assert(t == f, { t, f, reason });
  });

  errorBtns[5].addEventListener('click', () => { //console clear
    console.clear();
  });

  errorBtns[6].addEventListener('click', () => { //console dir
    console.dir(document.body);
  });

  errorBtns[7].addEventListener('click', () => { //console dirxml
    console.dirxml(document);
  });

  errorBtns[8].addEventListener('click', () => { //console group start
    console.group('Group test');
  });

  errorBtns[9].addEventListener('click', () => { //console group end
    console.groupEnd('Group test');
  });

  errorBtns[10].addEventListener('click', () => { //console table
    var futures = [
      {
        who: 'me',
        future: 'jobless',
      },
      {
        who: 'AI',
        future: 'skynet',
      }
    ];
    console.table(futures);
  });

  errorBtns[11].addEventListener('click', () => { //start timer
    console.time('Timer test');
  });

  errorBtns[12].addEventListener('click', () => { //end timer
    console.timeEnd('Timer test');
  });

  errorBtns[13].addEventListener('click', () => { //console trace
    const allat = () => { doing(); };
    const doing = () => { i(); };
    const i = () => { am(); };
    const am = () => { why(); };
    const why = () => { console.trace(); };
    allat();
  });

  errorBtns[14].addEventListener('click', () => { //trigger a global error
    causingAnError();
  });
} catch {
  throw new Error("Make it work bro it's not that hard");
} finally {
  let a = 1 / 0;
  console.log(`1/0 = ${a}`);
}

window.onerror = () => {
  console.log('bruh');
}
