import { gql } from "@apollo/client";

const EXAMPLE = (accountNumber: string, country: string) => ({
    query: gql`
    query EXAMPLE {
      EXAMPLE (accountNumber: "${accountNumber}", country: "${country}"){
        EXAMPLE{
        aprPrmId
        prmWebDe12scription
        description
        discount
        startdate
        enddate
        }
      }
    }
  `
});

export default EXAMPLE;
