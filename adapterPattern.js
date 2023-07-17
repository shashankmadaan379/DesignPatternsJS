// The Adapter design pattern is a structural design pattern that allows objects with incompatible interfaces to work
// together. It acts as a bridge between two incompatible interfaces, enabling them to collaborate without modifying
// their existing code.

class XMLData {
  constructor(xmlData) {
    this.xmlData = xmlData;
  }

  getXMLData() {
    return this.xmlData;
  }
}

class DataAnalyticsTool {
  constructor(jsonData) {
    this.jsonData = jsonData;
  }
  analyseData() {
    console.log("Analysing Data", this.jsonData);
  }
}
class Adapter extends DataAnalyticsTool {
  constructor(xmlData) {
    super();
    this.xmlData = xmlData;
  }
  analyseData() {
    console.log(
      "Converting xml data",
      this.xmlData.getXMLData(),
      "to json data"
    );
    console.log("Analysing converting Data");
  }
}
class Client {
  processData(tool) {
    tool.analyseData();
  }
}

const xmlData = new XMLData("Sample XML Data");
const tool = new Adapter(xmlData);
const client = new Client();
client.processData(tool);
