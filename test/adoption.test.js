import supertest from "supertest"; 
import chai from "chai"; 

const expect = chai.expect; 
const requester = supertest("http://localhost:8080"); 

describe("Router de Adopciones", () => {
    describe("GET /api/adoptions", () => {
        it("Me debería retornar una lista de adopciones", async () => {
            const { status, body } = await requester.get("/api/adoptions"); 

            expect(status).to.equal(200); 
            expect(body).to.be.an("array");
            body.forEach(adoption => {
                expect(adoption).to.have.property("id");
                expect(adoption).to.have.property("usuarioId");
                expect(adoption).to.have.property("mascotaId");
            });
        });

        it("Me retorna 404 si la ruta no existe", async () => {
            const { status } = await requester.get("/adoptions/noexiste");
            expect(status).to.equal(404); 
        });

        it("Buscamos que me retorne la info de una adopción existente", async () => {
            let aid = "67626d05a3f6fa3a7145f728"; 

            const { status, body } = await requester.get(`/api/adoptions/${aid}`); 
            expect(status).to.equal(200); 
            expect(body).to.be.an("object");
            expect(body).to.have.property("id", aid);
            expect(body).to.have.property("usuarioId");
            expect(body).to.have.property("mascotaId");
        });

        it("Nos debería retornar 404 si la adopción no existe", async () => {
            let noExisteAid = "67626d05a3f6fa3a7145f729"; 
            const { status, body } = await requester.get(`/api/adoptions/${noExisteAid}`); 

            expect(status).to.equal(404);
            expect(body).to.have.property("error");
            expect(body.error).to.equal("Adopción no encontrada");
        });

        it("Vamos a crear una adopción", async () => {
            let uid = "6748fc9f1cc87eda9209d06a";
            let pid = "674f8c6f72cc8bec558f7761";

            const { status, body } = await requester.post(`/api/adoptions/${uid}/${pid}`);

            expect(status).to.equal(200);
            expect(body).to.be.an("object");
            expect(body).to.have.property("id");
            expect(body).to.have.property("usuarioId", uid);
            expect(body).to.have.property("mascotaId", pid);
        });

        it("Nos debería retornar 400 si faltan parámetros al crear una adopción", async () => {
            let uid = "6748fc9f1cc87eda9209d06a";

            const { status, body } = await requester.post(`/api/adoptions/${uid}`);

            expect(status).to.equal(400);
            expect(body).to.have.property("error");
            expect(body.error).to.equal("Faltan parámetros requeridos");
        });
    });
});
