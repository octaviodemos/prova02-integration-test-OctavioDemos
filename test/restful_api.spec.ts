import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { SimpleReporter } from '../simple-reporter';
import { faker } from '@faker-js/faker';

describe('Restful API dev', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://api.restful-api.dev';

  const nomeObjeto = faker.commerce.productName();
  const nomeEditado = `${nomeObjeto} editado`;
  let objectId = '';

  p.request.setDefaultTimeout(30000);

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());

  describe('Objects', () => {
    it('Listar todos os objetos', async () => {
      await p
        .spec()
        .get(`${baseUrl}/objects`)
        .expectStatus(StatusCodes.OK)
        .expectJsonSchema({ type: 'array' });
    });

    it('Buscar objeto por id', async () => {
      await p
        .spec()
        .get(`${baseUrl}/objects/1`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({ id: '1' });
    });

    it('Cadastrar novo objeto', async () => {
      objectId = await p
        .spec()
        .post(`${baseUrl}/objects`)
        .withJson({
          name: nomeObjeto,
          data: {
            year: 2026,
            price: 3500
          }
        })
        .expectStatus(StatusCodes.OK)
        .expectBodyContains(nomeObjeto)
        .expectJsonSchema({
          type: 'object',
          properties: {
            id: {
              type: 'string'
            },
            name: {
              type: 'string'
            }
          },
          required: ['id', 'name']
        })
        .returns('id');
    });

    it('Buscar o objeto cadastrado', async () => {
      await p
        .spec()
        .get(`${baseUrl}/objects/${objectId}`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({ id: objectId, name: nomeObjeto });
    });

    it('Editar o objeto cadastrado', async () => {
      await p
        .spec()
        .put(`${baseUrl}/objects/${objectId}`)
        .withJson({
          name: nomeEditado,
          data: {
            year: 2026,
            price: 4000
          }
        })
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({ id: objectId, name: nomeEditado });
    });

    it('Excluir o objeto cadastrado', async () => {
      await p
        .spec()
        .delete(`${baseUrl}/objects/${objectId}`)
        .expectStatus(StatusCodes.OK)
        .expectBodyContains(objectId);
    });

    it('Buscar objeto excluído', async () => {
      await p
        .spec()
        .get(`${baseUrl}/objects/${objectId}`)
        .expectStatus(StatusCodes.NOT_FOUND);
    });
  });
});
