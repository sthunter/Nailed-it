import { expect, $ } from '../testHelper';
import furnitureHelper from '../../src/furniture/furnitureHelper';


describe('Furniture Helper ', () => {
  const rooms = {
      "Aviary" : {
        "color" : {
          "hex" : "#9575cd",
          "source" : "hex"
        },
        "furniture" : {
          "an item" : {
            "price" : "300",
            "size" : ""
          },
          "cool thing" : {
            "description" : "",
            "price" : "100"
          },
          "item" : {
            "price" : "500"
          },
          "the wtf thing" : {
            "deliveryDate" : "",
            "description" : "huh?",
            "price" : "2000",
            "size" : "",
            "url" : ""
          },
          "xyz" : {
            "price" : "200"
          }
        },
      },
      "Apiary" : {
        "color" : {
          "hex" : "#f06292",
          "source" : "hex"
        },
        "furniture" : {
          "Chair" : {
            "deliveryDate" : "2016-10-5",
            "description" : "it's a chair",
            "price" : "100"
          },
          "Thing" : {
            "deliveryDate" : "2019-10-18",
            "description" : "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "price" : "1000",
            "size" : "big"
          },
          "bed" : {
            "deliveryDate" : "2019-10-19",
            "description" : "its a bed",
            "price" : "300",
            "size" : "a lot"
          },
          "bwd" : {
            "deliveryDate" : "2016-10-23",
            "description" : "jkjfd;",
            "price" : "100",
            "size" : "145"
          },
          "chair" : {
            "bought" : true,
            "color" : "",
            "deliveryDate" : "2016-09-16",
            "notes" : "good for reading",
            "price" : "1200",
            "productPageURL" : "http://www.houzz.com/photos/chairs",
            "quantity" : 2,
            "size" : "",
            "url" : "http://st.hzcdn.com/simgs/3c2178bb04b7e871_4-0276/contemporary-armchairs-and-accent-chairs.jpg"
          },
          "item2" : {
            "price" : "200"
          },
          "item20" : {
            "price" : "200"
          },
          "item3" : {
            "price" : "500"
          },
          "item4" : {
            "price" : "600"
          },
          "item5" : {
            "price" : "5555"
          },
          "item6" : {
          },
          "lamp" : {
            "price" : "hello"
          },
          "widget" : {
            "price" : "3000"
          }
        },
      },
      "Den" : {
        "color" : {
          "hex" : "#4db6ac",
          "source" : "hex"
        },
        "furniture" : {
          "bartop" : {
            "price" : "2000"
          },
          "beer pong table" : {
            "price" : "200"
          },
          "pool table" : {
            "price" : "3000"
          }
        },
        "notes" : "needs a tv\nneeds a couch\nneeds a recliner",
        "size" : "20x20"
      },
      "Bedroom" : {
        "color" : {
          "hex" : "#b2ebf2",
          "source" : "hex"
        },
        "furniture" : {
          "bartop" : {
            "price" : "2000"
          },
          "beer pong table" : {
            "price" : "200"
          },
          "pool table" : {
            "price" : "3000"
          }
        },
        "notes" : false,
        "size" : false
      }
  };
  const Aviary = rooms['Aviary'];
  const Apiary = rooms['Apiary'];
  const Den = rooms['Den'];
  const Bedroom = rooms['Bedroom'];
  const roomNames = Object.keys(rooms);
  let furnitureNames = [];
  let furnitureObjs = [];
  for (var room in rooms) {
    let names = Object.keys(rooms[room].furniture);
    furnitureNames = [...furnitureNames,...names];
    for (var furniture in rooms[room].furniture) {
      let obj = rooms[room].furniture[furniture];
      furnitureObjs.push(obj);
    }
  };

  it('is an object', () => {
    expect(furnitureHelper).to.be.an('object');
  });
  describe('that has property called "filterByRoom" that', () => {
    let filterByRoom = furnitureHelper.filterByRoom;
    it('is a function', () => {
      expect(filterByRoom).to.be.a('function');
    });
    it('takes an object as a parameter or returns null', ()=> {
      let resultObj = filterByRoom({foo:'bar'});
      let resultStr = filterByRoom('foobar');
      let resultArr = filterByRoom(['foo', 'bar']);
      let resultFun = filterByRoom(console.log('foobar'));
      expect(resultObj).to.not.equal(null);
      expect(resultStr).to.equal(null);
      expect(resultArr).to.equal(null);
      expect(resultFun).to.equal(null);
    })
    describe('returns an array', () => {
      let result = filterByRoom(rooms)
      it('that is made of triples or is empty', () => {
        expect(result).to.be.an('array');
        if (result[0]) {
          expect(result[0]).to.be.an('array');
          expect(result[0].length).to.equal(3);
        }
        else {
          expect(JSON.stringify(result)).to.equal('[]');
        }
      });
      it('that has a room name for the first element', () => {
        expect(result[0][0]).to.be.a('string');
        expect(roomNames.indexOf(result[0][0]) !== -1).to.equal(true);
      });
      it('that has an array of furniture names for the second element', () => {
        expect(result[0][1]).to.be.an('array');
        expect(furnitureNames.indexOf(result[0][1][0]) !== -1).to.equal(true);
      });
      it('that has an array of furniture objects for the third element', () => {
        expect(result[0][2]).to.be.an('array');
        expect(furnitureObjs.indexOf(result[0][2][0]) !== -1).to.equal(true);
      });
    });

    it('deeply sorts rooms by room names', () => {
      let result = filterByRoom(rooms);
      expect(result[0][0]).to.equal('Apiary');
      expect(result[1][0]).to.equal('Aviary');
      expect(result[2][0]).to.equal('Bedroom');
      expect(result[3][0]).to.equal('Den');
    });
  });
  describe('that has property called "filterByFurniture" that', () => {
    let filterByFurniture = furnitureHelper.filterByFurniture;
    it('is a function', () => {
      expect(filterByFurniture).to.be.a('function');
    });
    it('takes an object as a parameter or returns null', ()=> {
      let resultObj = filterByFurniture({foo:'bar'});
      let resultStr = filterByFurniture('foobar');
      let resultArr = filterByFurniture(['foo', 'bar']);
      let resultFun = filterByFurniture(console.log('foobar'));
      expect(resultObj).to.not.equal(null);
      expect(resultStr).to.equal(null);
      expect(resultArr).to.equal(null);
      expect(resultFun).to.equal(null);
    })
    describe('returns an array', () => {
      let result = filterByFurniture(rooms)
      it('that is made of triples or is empty', () => {
        expect(result).to.be.an('array');
        if (result[0]) {
          expect(result[0]).to.be.an('array');
          expect(result[0].length).to.equal(3);
        }
        else {
          expect(JSON.stringify(result)).to.equal('[]');
        }
      });
      it('that has a furniture name for the first element', () => {
        expect(result[0][0]).to.be.a('string');
        expect(furnitureNames.indexOf(result[0][0]) !== -1).to.equal(true);
      });
      it('that has an room name for the second element', () => {
        expect(result[0][1]).to.be.an('string');
        expect(roomNames.indexOf(result[0][1]) !== -1).to.equal(true);
      });
      it('that has a furniture object for the third element', () => {
        expect(result[0][2]).to.be.an('object');
        expect(furnitureObjs.indexOf(result[0][2]) !== -1).to.equal(true);
      });
    });

    xit('deeply sorts rooms by room names', () => {
      let result = filterByFurniture(rooms);
      expect(result[0][0]).to.equal('Apiary');
      expect(result[1][0]).to.equal('Aviary');
      expect(result[2][0]).to.equal('Bedroom');
      expect(result[3][0]).to.equal('Den');
    });
  });
  describe('that has property called "filterByDate" that', () => {
    let filterByDate = furnitureHelper.filterByDate;
    it('is a function', () => {
      expect(filterByDate).to.be.a('function');
    });
    let result = filterByDate(rooms);
  });
    describe('that has property called "filterByPrice" that', () => {
    let filterByPrice = furnitureHelper.filterByPrice;
    it('is a function', () => {
      expect(filterByPrice).to.be.a('function');
    });
    let result = filterByPrice(rooms);
  });
});
