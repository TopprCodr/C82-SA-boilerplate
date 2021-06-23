const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
    world = engine.world;

// create renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: 'rgb(255,255,255)'
    }
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// create bodies



//Add fixed slider bodies with different angles




// add bodies to world


// add mouse control




// keep the mouse in sync with rendering

