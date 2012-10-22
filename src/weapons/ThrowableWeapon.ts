///<reference path="../Graphics.ts"/>
///<reference path="../AssetManager.ts"/>
///<reference path="../Physics.ts"/>

class ThrowableWeapon {

    body;
    fixture;
    image;

    constructor (x, y, image) {

        this.image = image;

        var fixDef = new b2FixtureDef;
        fixDef.density = 1.0;
        fixDef.friction = 0.5;
        fixDef.restitution = 0.2;
        fixDef.shape = new b2CircleShape((image.width/4)/Physics.worldScale);

        var bodyDef = new b2BodyDef;
        bodyDef.type = b2Body.b2_dynamicBody;
        bodyDef.position.x = x;
        bodyDef.position.y = y;

        this.fixture = Physics.world.CreateBody(bodyDef).CreateFixture(fixDef);
        this.body = this.fixture.GetBody();
    }

    draw(ctx) {

        ctx.save()

        ctx.translate(
        this.body.GetPosition().x * Physics.worldScale,
        this.body.GetPosition().y * Physics.worldScale
        )
        ctx.rotate(this.body.GetAngle())

        var radius = this.fixture.GetShape().GetRadius()*2 * Physics.worldScale;

        ctx.drawImage(this.image,
            -radius,
            -radius,
            radius*2,
            radius*2);
        ctx.restore()

    }

}
