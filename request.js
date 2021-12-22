const cheerio = require('cheerio');
const { html } = require('cheerio/lib/api/manipulation');
const request = require('request');
const fs = require('fs');
const writeStream = fs.createWriteStream('content.pdf');
request('https://en.wikipedia.org/wiki/A#History', cb);
function cb(error, response, html) {  
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }else{
        handlehtml(html); 
    }
};
function handlehtml(html){
    let setTool = cheerio.load(html);
    let contentArr = setTool("h2>span");
    let paraArray = setTool("p");
    let ulList = setTool("ul");
 
    const head1 = setTool(contentArr[0]).text();
    const para1 = setTool(paraArray[5]).text();
    const para2 = setTool(paraArray[6]).text();
    const para3 = setTool(paraArray[7]).text();
    const head2 = setTool(contentArr[1]).text();
    const para4 = setTool(paraArray[12]).text();
    const ul1 = setTool(ulList[17]).text();
    const para5 = setTool(paraArray[13]).text();
    const para6 = setTool(paraArray[14]).text();
    const head3 = setTool(contentArr[2]).text();
    const para7 = setTool(paraArray[17]).text();
    const para8 = setTool(paraArray[18]).text();
    const para9 = setTool(paraArray[19]).text();
    const para10 = setTool(paraArray[20]).text();
    const para11 = setTool(paraArray[21]).text();
    const para12= setTool(paraArray[22]).text();

    // console.log(head1);
    // console.log(para1);
    // console.log(para2);
    // console.log(para3);
    // console.log(head2);
    // console.log(para4);
    // console.log(ul1);
    // console.log(para5);
    // console.log(para6);
    // console.log(head3);
    // console.log(para7);
    // console.log(para8);
    // console.log(para9);
    // console.log(para10);
    // console.log(para11);
    // console.log(para12);

    writeStream.write(head1+'\n');
    writeStream.write(para1+'\n');
    writeStream.write(para2+'\n');
    writeStream.write(para3+'\n');
    writeStream.write(head2+'\n');
    writeStream.write(para4+'\n');
    writeStream.write(ul1+'\n');
    writeStream.write(para5+'\n');
    writeStream.write(para6+'\n');
    writeStream.write(head3+'\n');
    writeStream.write(para7+'\n');
    writeStream.write(para8+'\n');
    writeStream.write(para9+'\n');
    writeStream.write(para10+'\n');
    writeStream.write(para11+'\n');
    writeStream.write(para12+'\n');
}