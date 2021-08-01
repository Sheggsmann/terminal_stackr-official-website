//---------------------------colors------------------------------------------------------\\
const BLACK = '0x000000';
const RED = '0xFF0000';
const GREEN = '0x05FA23';
const GREEN3 = '0x63dc23';
const GREEN2 = '0x23B9DC';
const BLUE = '0x0000CC ';
const BLUE2 = '0X04077e';
const BLUE3 = 'OX090EF6';
const ORANGE = '0x199805';
const YELLOW = '0xFFFF00';
const SKYBLUE = '0x0000FF';
const FUSIA = '0xFF00FF';
const GRAY = '0xC0C0C0';
const WHITE = '0xFFFFFF';
const PURPLE = '0x5606F9'
//--------------------------------------DINAMIC TEXT TA TE & VRU <> ERU----------------------------------\\
const style = new PIXI.TextStyle({
    fontFamily: 'Calibri',
    fill: 'WHITE',
    fontSize: 30,
    fontWeight: 'bold',
})

const style2 = new PIXI.TextStyle({
    fontFamily: 'Calibri',
    fill: 'WHITE',
    fontSize: 30,
    fontWeight: 'bold',
})
const style3 = new PIXI.TextStyle({
    fontFamily: 'Calibri',
    fill: 'WHITE',
    fontSize: 23,
    fontWeight: 'bold',
})

const myText_TA = new PIXI.Text('TA', style);
myText_TA.x = 235;
myText_TA.y = 215;

const myText_TE = new PIXI.Text('TE', style);
myText_TE.x = 235;
myText_TE.y = 252;

const myText_VRU = new PIXI.Text('VRU', style2);
myText_VRU.x = 170;
myText_VRU.y = 95;

const myText_ERU = new PIXI.Text('ERU', style2);
myText_ERU.x = 90;
myText_ERU.y = 290;

//-------------------------------DINAMIC TEXT T & X----------------------------\\

const styleBlack = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fill: WHITE,
    fontSize: 24,
    strokeThickness: 2,
    //dropShadow: true,
})

const myText_t = new PIXI.Text('T', styleBlack);
myText_t.x = 270;
myText_t.y = 170;

const myText_x = new PIXI.Text('X', styleBlack);
myText_x.x = 175;
myText_x.y = 260;
//-------------------------------------END OF DINAMIC TEXT------------------------------------------------\\


//------------------------------slice parameter arrays--------------------------------------------\\
let octave = 0.785398 //Slice span
let origen = octave * 4//Torus Draw Start point


    //super(texture);
    //console.log(x ,  y ,  inDia ,  outDia , startTorus ,endTorus, color,lineWidth,lineColor , family,true_false, DOWN, NORMAL, OVER)
    let VRU_Slice = [250, 250,   100,     200,    0.785398 * 5, 0.785398 * 6, BLUE,    4, BLUE, ['vru', 't', 'TA', 'TE'], true, WHITE, WHITE, BLUE];
 
    let VU_Slice = [250, 250,   100,     200,    0.785398 * 6, 0.785398 * 7, BLUE,    0,   WHITE, ['vu', 't', 'TA', 'TE'], true, YELLOW, FUSIA, BLUE];
      
    let TSU_Slice = [250, 250, 100, 200, (0.785398 * 7)+0.03, 0.785398 * 8, BLUE,  2, GRAY, ['tsu', 't', 'TA', 'TE'], true, YELLOW, FUSIA, BLUE];
        
    let KU_Slice = [250, 250, 100, 200, 0.785398 * 8, 0.785398 * 8.5, BLUE,  0, WHITE,['ku', 'i', 'TA', 'TE'], true, YELLOW, FUSIA, BLUE];
        
    let GU_Slice = [250, 250, 100, 200, 0.785398 * 8.5, 0.785398 * 9, ORANGE,  2, GRAY, ['gu', 'i', 'DA', 'DE'], BLACK, ORANGE, ORANGE];

    let BUMUNU_Slice = [250, 250, 100, 200, 0.785398 * 9, 0.785398 * 10, ORANGE,  2, GRAY, ['bumunu', 'i', 'DA', 'DE'], BLACK, ORANGE, ORANGE];
               
    let SU_Slice = [250, 250, 100, 200, (0.785398 * 10)+0.01, (0.785398 * 11)-0.0, BLUE,  3, GRAY, ['su', 'shi', 'TA', 'TE'], true, YELLOW, FUSIA, BLUE];
    
    let ERU_Slice = [250, 250, 100, 200, 0.785398 * 11, (0.785398 * 12)-0.03, BLUE,  0, GRAY, ['eru', 'x', 'TA', 'TE'], true, YELLOW, FUSIA, BLUE];
         
    let t_Slice = [250, 250, 40, 98, 0.785398 * 5, 0.785398 * 8, BLACK, 1, WHITE, ['vru', 't', 'TA', 'TE'], true, BLACK, YELLOW, YELLOW]
    
    let i_Slice = [250, 250, 40, 98, 0.785398 * 8, 0.785398 * 9, BLACK, 0, WHITE, ['vru', 'i', 'TA', 'TE'], true, YELLOW, YELLOW, YELLOW]
    
   
    let n_Slice = [250, 250, 40, 98, octave * 9, (octave * 10) - 0.01, BLACK, 0, WHITE, 'bumunu', ['n', 'DA', 'DE'], true, BLACK, YELLOW, YELLOW]
    let shi_Slice = [250, 250, 40, 98, (octave * 10) + 0.02, (octave * 11) - 0.03, BLACK, 0, WHITE,  ['su', 'shi', 'TA', 'TE'], true, BLACK, YELLOW, YELLOW]
    let x_Slice = [250, 250, 40, 98, (octave * 11) + 0.02, (octave * 12) - 0.03, BLACK, 0, WHITE, ['eru', 'x', 'TA', 'TE'], true, BLACK, YELLOW, YELLOW]    
    let	rev_Slice = [250, 250, 100, 200, 0.785398 * 12 + 0.02, 0.785398 * 13 , BLACK, 3, GRAY, ['rev', 'rev', 'ERU', 'VRU'], true,YELLOW, BLUE, BLUE2]

    let mySliceParade = [
        VRU_Slice,
        VU_Slice,
        TSU_Slice,
        KU_Slice,
        GU_Slice,
        BUMUNU_Slice,
        SU_Slice,
        ERU_Slice,
        t_Slice,
        i_Slice,
        n_Slice,
        shi_Slice,
        x_Slice,
        rev_Slice      ]
    
    


//-------------Class gui_Label------------\\\

//let knight;
//let wolf;

//mySlices parameters(x ,  y ,  inDia ,  outDia , startTorus ,endTorus, color,lineWidth,lineColor , family,true_false, DOWN, NORMAL, OVER)

function Gui_Component(mySlices) {
    console.log('my slices ' , mySlices)
    let family = mySlices[9]
    console.log('my family ' , family)
    let true_false = mySlices[10]
    console.log('family 10' , mySlices[10])
    let DOWN =   mySlices[12]
    let NORMAL = mySlices[7]
    let OVER =   mySlices[6]
    let pointerIsDown = false;
    let pointerIsOver = false;






    const torus = new PIXI.Graphics();
    torus.beginFill(mySlices[6])
    torus.lineStyle(mySlices[7], mySlices[8], 1)
    torus.drawTorus(mySlices[0],mySlices[1], mySlices[2], mySlices[3], mySlices[4], mySlices[5]);
    torus.endFill();
    app.stage.addChild(torus);
    torus.interactive = true_false;
    torus.buttonMode = true;

//--------------------------------TEXT----------------------------------\\



    //------------------------------------pointerUp---------------------------\\

    torus.on('pointerup', function doPointerUp() {
        console.log('Up');
        if (pointerIsOver) {
            console.log('pointer is over and up')
            this.tint = OVER;
        } else {

            this.tint = NORMAL;
        }
        pointerIsDown = false;
    });

    //----------------------------------------pointerDown--------------------------------\\

    torus.on('pointerdown', function doPointerDown() {
        console.log('DOPOINTERDown', family);
        // console.log('FAMILY: ',family);

        // HERE IS WHERE THE COMPARISM GOES, TWEAK IT TO YOUR NEEDS
        // ===============================================================================================================================
        let firstSlice = family[0].toLowerCase()
        console.log(family, 'my family' )
        if (family == 'bumunu' || family== 'gu' || mySlices[10][0] == 'n' ) {
            console.log('my slices 10', mySlices[10][0])
        
            myText_TA.text = mySlices[10][1]
            myText_TE.text = mySlices[10][2]
            app.stage.addChild(myText_TA);
            app.stage.addChild(myText_TE);} 



        else {
            if (family[0] == 'rev' ) {
                console.log('Family rev', mySlices )
                myText_VRU.text =family[3]
                myText_ERU.text = family[2]
            
                app.stage.addChild(myText_t);
                app.stage.addChild(myText_x);} 
            else{
                console.log('TA|TE')
                myText_VRU.text = 'VRU'
                myText_ERU.text = 'ERU'
        
                app.stage.addChild(myText_t);
                app.stage.addChild(myText_x);
                myText_TA.text = family[2]
                myText_TE.text = family[3]
                app.stage.addChild(myText_TA);
                app.stage.addChild(myText_TE);}
            
        }
        // ==================================================================================================================================
        this.tint = DOWN;
        pointerIsDown = false;
        return family;



    });

    //----------------------------------------pointerover--------------------------------\\
    torus.on('pointerover', function doPointerOver() {
        console.log('Over');
        this.tint = OVER;
        pointerIsOver = true;
    });

    //----------------------------------------pointerout--------------------------------\\

    torus.on('pointerout', function doPointerOut() {
        console.log('Out');
        this.tint = NORMAL;
        pointerisOver = false;
    });


    //----------------------------------------pointerupoutside--------------------------------\\

    torus.on('pointerupoutside', function doPointerUpOutside() {
        this.tint = NORMAL;
        pointerIsOver = false;
        pointerIsDown = false;
    });
    console.log('Out');
    return app.stage.addChild(torus)

}

function Gui_Component_non_interactive(x = 0, y = 0, innerDiameter = 0, outerDiameter = 0, origen = 0, octave = 0, color = 'BLUE',
    lineWidth = 5, lineColor = GRAY, family , true_false = false, NORMAL, OVER, DOWN) {
    //super(texture);
    console.log(x, y, innerDiameter, outerDiameter, origen, octave, color, lineWidth, lineColor, family)
    console.log(family)

    x = x;
    y = y;
    innerDiameter = innerDiameter;
    outerDiameter = outerDiameter;
    origen = origen;
    octave = octave;
    color = color;
    lineWidth = lineWidth;
    lineColor = lineColor;
    //let family = family;
    //true_false = true_false;
    let pointerIsDown = false;
    let pointerIsOver = false;
    //let NORMAL=NORMAL;
    //let OVER =OVER;
    // let DOWN=DOWN;

    const torus = new PIXI.Graphics();
    torus.beginFill(color)
    torus.lineStyle(lineWidth, lineColor, 1)
    torus.drawTorus(x, y, innerDiameter, outerDiameter, origen, octave);
    torus.endFill();
    app.stage.addChild(torus);
    torus.interactive = true_false;
    torus.buttonMode = true;
    //------------------------------------pointerUp---------------------------\\

    torus.on('pointerup', function doPointerUp() {
        console.log('Up');
        if (pointerIsOver) {
            console.log('pointer is over and up')
            this.tint = OVER;
        } else {
            console.log('pointer is up promise')
            this.tint = NORMAL;
        }
        pointerIsDown = false;
    });

    //----------------------------------------pointerDown------RETURN FUNCTION--------------------------\\

    torus.on('pointerdown', function doPointerDown() {
        console.log('Down', family);
        // console.log('FAMILY: ',family);
        this.tint = DOWN;
        pointerIsDown = false;
        return family;
    });

    //----------------------------------------pointerover--------------------------------\\
    torus.on('pointerover', function doPointerOver() {
        console.log('Over');
        this.tint = OVER;
        pointerIsOver = true;
    });

    //----------------------------------------pointerout--------------------------------\\

    torus.on('pointerout', function doPointerOut() {
        console.log('Out');
        this.tint = NORMAL;
        pointerisOver = false;
    });


    //----------------------------------------pointerupoutside--------------------------------\\

    torus.on('pointerupoutside', function doPointerUpOutside() {
        this.tint = NORMAL;
        pointerIsOver = false;
        pointerIsDown = false;
    });
    console.log('Out');
    return app.stage.addChild(torus)

}




//--------------------end Class Gui_Label---------------\\


//document.body.appendChild(app.view)

//---------------run program--------------------------------\\


window.onload = function() {

    app = new PIXI.Application({
        width: 500,
        height: 500,
        backgroundColor: BLACK

    });

    document.body.appendChild(app.view);


    
   
    const style = new PIXI.TextStyle({
        fontFamily: 'Calibri',
        fill: 'WHITE',
        fontSize: 20,
    })



    const myText_VU = new PIXI.Text('VU', style);
    myText_VU.x = 300;
    myText_VU.y = 95;

    const myText_TSU = new PIXI.Text('TSU', style);
    myText_TSU.x = 360;
    myText_TSU.y = 185;

    const myText_KU = new PIXI.Text('KU', style);
    myText_KU.x = 375;
    myText_KU.y = 260;


    const myText_GU = new PIXI.Text('GU', style);
    myText_GU.x = 353;
    myText_GU.y = 315;

    const myText_BUMUNU = new PIXI.Text('BUMUNU', style);
    myText_BUMUNU.x = 265;
    myText_BUMUNU.y = 370;

    const myText_SU = new PIXI.Text('SU', style);
    myText_SU.x = 180;
    myText_SU.y = 370;


    const myText_REV = new PIXI.Text('<REVERSED>', style3);
    myText_REV.x = 65;
    myText_REV.y = 240;
    myText_REV.rotation = Math.PI / -2.75;
    //REV_text_coordinates = ['<REVERSED>', 65, 240, style3, Math.PI / -2.75];


    const myText_i = new PIXI.Text('I', styleBlack);
    myText_i.x = 312;
    myText_i.y = 260;

    const myText_n = new PIXI.Text('N', styleBlack);
    myText_n.x = 268;
    myText_n.y = 300;

    const myText_shi = new PIXI.Text('SHI', styleBlack);
    myText_shi.x = 200;
    myText_shi.y = 300;



    const myText_Irreg = new PIXI.Text('Irregulars', style);
    myText_Irreg.x = 65;
    myText_Irreg.y = 195;
    myText_Irreg.rotation = Math.PI / 15;

    const myText_Honorifics = new PIXI.Text('Honorifics', style);
    myText_Honorifics.x = 90;
    myText_Honorifics.y = 140;
    myText_Honorifics.rotation = Math.PI / 6;

    const style_TATE = new PIXI.TextStyle({
        fontFamily: 'Calibri',
        fill: 'BLACK',
        fontSize: 24,
        strokeThickness: 2,
        //dropShadow: true,
    })


    //[octave * 12] + 0.02, [octave * 13]

    InnerCircle = new Gui_Component_non_interactive(250, 250, 98, 98, 4, 3+0.1, color = BLACK, 5, YELLOW, 'Inner circle', false);
    outerCircle = new Gui_Component_non_interactive(250, 250, 203, 203, 0, 6.3, color = BLACK, 5, GRAY, 'outer circle', false);
    black_t_Slice = new Gui_Component_non_interactive(250,250, 40,98, octave*5, octave*8, color=BLACK, 5, YELLOW,'outer circle', false);


    const thruLine = new PIXI.Graphics();
    thruLine.lineStyle(5, GRAY, 1)
    thruLine.moveTo(50, 250)
    thruLine.lineTo(450, 250)

    const thruLineVRU_1 = new PIXI.Graphics();
    thruLineVRU_1.lineStyle(5, GRAY, 1)
    thruLineVRU_1.moveTo(106, 106)
    thruLineVRU_1.lineTo(500 - 106, 500 - 106)


    const thruLineVU_TSU = new PIXI.Graphics();
    thruLineVU_TSU.lineStyle(5, GRAY, 1)
    thruLineVU_TSU.moveTo(395, 110)
    thruLineVU_TSU.lineTo(106, 500 - 106)

    const thruLineVRU_VU = new PIXI.Graphics();
    thruLineVRU_VU.lineStyle(5, GRAY, 1)
    thruLineVRU_VU.moveTo(250, 50)
    thruLineVRU_VU.lineTo(250, 450)


    const thruLineKU_GU = new PIXI.Graphics();
    thruLineKU_GU.lineStyle(5, GRAY, 1)
    thruLineKU_GU.moveTo(343, 287)
    thruLineKU_GU.lineTo(440, 325)

    const halfCircle = Gui_Component_non_interactive();
    halfCircle.beginFill(BLACK)
    halfCircle.lineStyle(5,0xFF9900, 1)
    halfCircle.drawTorus(250, 250, 0, 40, 0, octave * 4, BLACK, 0, BLUE, 't', true, YELLOW, BLUE, YELLOW, false);
    halfCircle.endFill();

    const halfCircle2 = Gui_Component_non_interactive();
    halfCircle2.beginFill(BLACK)
    halfCircle2.closePath()
    halfCircle2.lineStyle(5, 0xFF9900, 1)
    halfCircle2.drawTorus(250, 250, 0, 40, octave * 4, octave * 8, BLACK, 0, WHITE, 't', true, YELLOW, FUSIA, BLUE, false);
    halfCircle2.endFill();

    app.stage.addChild(thruLineVU_TSU);

    app.stage.addChild(thruLineVRU_VU);
    app.stage.addChild(thruLineKU_GU);

    app.stage.addChild(thruLineVRU_1);

    app.stage.addChild(halfCircle);
    app.stage.addChild(halfCircle2);


    app.stage.addChild(thruLine);
    
    //app.stage.addChild(myText_TA);
    //app.stage.addChild(myText_TE);
    app.stage.addChild(black_t_Slice);
    black_t_Slice

//----------------------------------------TEXT AND COORDINATES------------------------\\

VU_text_coordinates = ['VU',300,95,style2];
TSU_text_coordinates = ['TSU',360,185,style2];
KU_text_coordinates = ['KU', 375,260,style2];
GU_text_coordinates = ['GU',353, 315,style2];
BUMUNU_text_coordinates = ['BUMUNU',265,370, style2];
SU_text_coordinates = ['SU', 180, 370, style2];
ERU_text_coordinates = ['ERU',90, 290, style2];
VRU_text_coordinates = ['VRU', 170, 95, style2];
T_text_coordinates = ['T',270,170,style2];
I_text_coordinates = ['I',312,260,style2];	
N_text_coordinates = ['N',268,300,style2];
SHI_text_coordinates = ['SHI', 200,300,style2];
X_text_coordinates = ['X',175,260,style2];
REV_text_coordinates = ['<REVERSED>', 65, 240, style3, Math.PI / -2.75];

text_positions=[
    VRU_text_coordinates, 
    VU_text_coordinates, 
    TSU_text_coordinates, 
    KU_text_coordinates,
    GU_text_coordinates,
    BUMUNU_text_coordinates,
    SU_text_coordinates,
    ERU_text_coordinates,
    T_text_coordinates, 
    I_text_coordinates,
	N_text_coordinates,
    SHI_text_coordinates,
    X_text_coordinates,
    REV_text_coordinates
]

//----------------------------------End of Text and coordinaes----------------------------------\\

    //myCoordinates=
    function add_myText(text_positions){
        console.log('add text: ',text_positions[0])
        const text = new PIXI.Text(text_positions[0], text_positions[3]);
        text.x = text_positions[1];
        text.y = text_positions[2];
        text.rotation = text_positions[4];
        app.stage.addChild(text);
        //text.rotation = Math.PI / 6;Math.PI / -3.5;
    }



    function paintText(text_positions){
        console.log('paint text: ',text_positions[0])
        for (let i = 0; i < text_positions; ++i) 
        console.log('text ',text_positions[0])
        add_myText(text_positions)

    }

    //-------------------------loop----------------------------------
    Gui_Component(mySliceParade[0])
    add_myText(text_positions[0])
    //----------------------------------------------------------------

    app.stage.addChild(myText_VRU);
    app.stage.addChild(myText_VU);
    app.stage.addChild(myText_TSU);
    app.stage.addChild(myText_KU);
    app.stage.addChild(myText_GU);
    app.stage.addChild(myText_BUMUNU);
    app.stage.addChild(myText_SU);
    app.stage.addChild(myText_ERU);
    app.stage.addChild(myText_REV);
    app.stage.addChild(myText_t);
    app.stage.addChild(myText_i);
    app.stage.addChild(myText_n);
    app.stage.addChild(myText_shi);
    app.stage.addChild(myText_x);
    app.stage.addChild(myText_TA);
    app.stage.addChild(myText_TE);
    //app.stage.addChild(myText_VRU);
    //app.stage.addChild(myText_ERU);
    //paintText(text_positions)
    //function show_Gui(){
        
       // for (let i = 0; i < mySliceParade; ++i)        { 
            //app.ticker Gui_Component(mySliceParade[0])  
               // add it to the stage
            //app.stage.addChild(mySliceParade[i]);

    // add button to array
    //buttons.push(button);                 
    //    }  
    //}
    //show_Gui()
    


    //------------------------------------------create sprite---------------------------------------------\\

 
}