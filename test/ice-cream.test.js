describe('Ice Cream Function', function () {
    it('should be able to return the name of the Flavour, topping & Container and total price', function () {
        var getFlavour = FactoryIceCream();
        getFlavour.addflavour("vanilla", "PlainCone", ["Smarties"])


        assert.equal(getFlavour.getAllPrice(), 20);
  });

  it('should be able to return the name of the Flavour, topping & Container and their  total prices', function () {
    var getFlavour = FactoryIceCream();
    getFlavour.addflavour("vanilla", "SugarCone", ["Smarties", "Crumbed peanuts"])


    assert.equal(getFlavour.getAllPrice(), 25);
});
it('should not be able to to return R0.00 if you dont select a ice cream to make', function () {
  var getFlavour = FactoryIceCream();
  getFlavour.addflavour("", "", ["", ""])


  assert.equal(getFlavour.getAllPrice(),0.00 );
});
it('should not be able to return a type of  flavour ', function () {
  var getFlavour = FactoryIceCream();
  getFlavour.addflavour("vanilla")


  assert.equal(getFlavour.getValues( "vanilla"),0);
});
it('should not be able to return a type of container ', function () {
  var getFlavour = FactoryIceCream();
  getFlavour.getContaner("papercup")


  assert.equal(getFlavour.getContaner( "papercup"),0);
});
it('should not be able to return a type of topping ', function () {
  var getFlavour = FactoryIceCream();
  getFlavour.getTopping("Oreos")


  assert.equal(getFlavour.getValues( "Oreos"),0);
});
it('should not be able to return a different types of topping ', function () {
  var getFlavour = FactoryIceCream();
  getFlavour.getTopping(["Oreos","Smarties"])


  assert.equal(getFlavour.getValues( "Oreos","Smarties"),0);
});
it('should not be able to return a different types of topping ', function () {
  var getFlavour = FactoryIceCream();
  getFlavour.getTopping(["Oreos","Smarties"])


  assert.equal(getFlavour.getValues( "Oreos","Smarties"),0);
});
it('should not be able to return the type of ice cream made', function () {
  var getFlavour = FactoryIceCream();
  getFlavour.addflavour("Chocolate","SugarCone",["Oreos","Smarties"])


  assert.equal(getFlavour.getAllPrice( "Oreos","Smarties"),48);
});

});