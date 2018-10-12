import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";

export let errorRate = new Rate("errors");

export let options = {
    vus: 100,
    duration: "60s",
    thresholds: {
        errors: ["rate<0.01"]
    }
};

export default function() {
    var num = Math.floor(Math.random() * 1000000 + 9000000);
    let res = http.get(`http://localhost:3000/artist/${num}`);
    check(res, {
        "status was 200": r => r.status == 200
    }) || errorRate.add(1);
}