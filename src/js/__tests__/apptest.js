import ErrorRepository from "../app"

test("get description by code", () => {
    const newRep = new ErrorRepository();
    expect(newRep.translate(404)).toEqual('Page not found');
  });

  test("unknow code", () => {
    const newRep = new ErrorRepository();
    expect(newRep.translate(222)).toEqual('Unknown error');
  });