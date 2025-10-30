import "./App.css";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual and qna
            id: "fb9b4348-42cf-4f0f-8664-dc3cdffb8d8d",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=fb9b4348-42cf-4f0f-8664-dc3cdffb8d8d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
            accessToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6InlFVXdtWFdMMTA3Q2MtN1FaMldTYmVPYjNzUSIsImtpZCI6InlFVXdtWFdMMTA3Q2MtN1FaMldTYmVPYjNzUSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvM2ZmZTY1MWUtMTVkMy00NWYyLThmODctM2E1MWM4NzhjMDFlLyIsImlhdCI6MTc2MTgyNTk1MSwibmJmIjoxNzYxODI1OTUxLCJleHAiOjE3NjE4MzAxMjcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVVFBdS84YUFBQUFCcUdFRXVPQVJxNGtvRTQzaHFQbEVmMDNaQjVPenJiN2FaZ1JBeGp0TWdXREtEV2QwOENtU3NXZ3EzVllJVUVvRW03QnBKOFI4NHNqNUY0dHJJRDVaQT09IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjE4ZmJjYTE2LTIyMjQtNDVmNi04NWIwLWY3YmYyYjM5YjNmMyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQSBLIiwiZ2l2ZW5fbmFtZSI6IkZhcmhhbiIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjU5LjE4Mi45My4xNTYiLCJuYW1lIjoiRmFyaGFuIEEgSyIsIm9pZCI6Ijg5ZDljOWEyLTQzMDMtNGMwOC1hYmJkLTAxNjcxY2EyNzljMSIsInB1aWQiOiIxMDAzMjAwNTNGN0NGRjI4IiwicmgiOiIxLkFiNEFIbVgtUDlNVjhrV1BoenBSeUhqQUhna0FBQUFBQUFBQXdBQUFBQUFBQUFCLUFVVy1BQS4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb25uZWN0aW9uLlJlYWQuQWxsIENvbm5lY3Rpb24uUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBJdGVtLkV4ZWN1dGUuQWxsIEl0ZW0uRXh0ZXJuYWxEYXRhU2hhcmUuQWxsIEl0ZW0uUmVhZFdyaXRlLkFsbCBJdGVtLlJlc2hhcmUuQWxsIE9uZUxha2UuUmVhZC5BbGwgT25lTGFrZS5SZWFkV3JpdGUuQWxsIFBpcGVsaW5lLkRlcGxveSBQaXBlbGluZS5SZWFkLkFsbCBQaXBlbGluZS5SZWFkV3JpdGUuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFJlcHJ0LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGFnLlJlYWQuQWxsIFRlbmFudC5SZWFkLkFsbCBUZW5hbnQuUmVhZFdyaXRlLkFsbCBVc2VyU3RhdGUuUmVhZFdyaXRlLkFsbCBXb3Jrc3BhY2UuR2l0Q29tbWl0LkFsbCBXb3Jrc3BhY2UuR2l0VXBkYXRlLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWRXcml0ZS5BbGwiLCJzaWQiOiIwMDlkMzI0OS01NDhjLTZiYWMtZmIwYi0wMmU1MDNhNzE4NWUiLCJzdWIiOiJLRXNzUHFLRnkwMlFUX2RKbkJNZ0VYaXI3U19sUDVSUVotSFBpLW1oQklNIiwidGlkIjoiM2ZmZTY1MWUtMTVkMy00NWYyLThmODctM2E1MWM4NzhjMDFlIiwidW5pcXVlX25hbWUiOiJtdWhhbW1lZC5mYXJoYW5AYWRpdGktbGxjLmNvbSIsInVwbiI6Im11aGFtbWVkLmZhcmhhbkBhZGl0aS1sbGMuY29tIiwidXRpIjoieGd1bWVDY0NORW1qN18xTTRuSWFBUSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19hY3RfZmN0IjoiNSAzIiwieG1zX2Z0ZCI6Ik5rRWhYODR2QXRiZmF6ZXlaMVJXenhDZ0JOd2JwZktnVUxySFpJYTBwZmtCYTI5eVpXRnpiM1YwYUMxa2MyMXoiLCJ4bXNfaWRyZWwiOiIxNCAxIiwieG1zX3BsIjoiZW4tVVMiLCJ4bXNfc3ViX2ZjdCI6IjMgNiJ9.U81usDj9mg6sVqUrQaA0k63wl4ryWTcj6OTaU1RXoo8NtyeBSabwdI4rDOHlaKGzQezSn6DXbskjg20tXTBgzTTSFsuyPBeZ56yfV7NiBTnTdHA1C2chBD6IPm7X4c8_VPEwrUbBfGawv9aX4SWLNQURmR8ufDTHUWtAu4IcRcb2o_bA4vss5UyfZuHNTfvsubeCois9NryvW_4AKYeDY3bNQfvP9-X8wipqt-puUPXXvbFnF2NJQzQvbhPJ391oRVbcSwABU12mJog7-aD4ZAOGksq3_HSMpypXaVlE_jzPS-wRH0B9WqO3Xv_VSeo5s3WVmsLvOau4dDdS_uoFMg",
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: true,
                  visible: true,
                },
              },
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event.detail);
                },
              ],
            ])
          }
          cssClassName={"Embed-container"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
