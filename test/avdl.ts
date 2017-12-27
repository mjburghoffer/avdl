import { assert } from "chai";
import { slow, suite, test, timeout } from "mocha-typescript";
import { compileAvdl } from "../src/compiler/avdl";

@suite class Hello {
    @test public world() {
        const whatever = compileAvdl("protocol foo {}");
        const whatever2 = compileAvdl("protocol foo {}");
        assert.deepEqual(whatever, whatever2);
    }

    @test public toStrings() {
        const whatever = compileAvdl('@raw("some") protocol foo {}');
        assert.equal('{"namespace":"namespace","name":"foo","raw":"some"}', whatever.toString());
    }
}
