describe("zipcodeFromAddress", () => {

  it("returns the zipcode from an address", () => {
    let address = '1234 Bradley Dr, Cupertino, CA 94102'
    let output = zipcodeFromAddress(address);
    expect(output).toEqual('94102');
  })

  it("returns false if no zipcode at the end is found", () => {
    let address = '1234 Bradley Dr, Cupertino, CA'
    let output = zipcodeFromAddress(address);
    expect(output).toBeFalse();
  })

  it("returns false if it doesn't look like a US zipcode", () => {
    let address = '1234 Bradley Dr, Cupertino, CA, 1234'
    let output = zipcodeFromAddress(address);
    expect(output).toBeFalse();
  })

});

