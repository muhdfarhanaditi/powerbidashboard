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
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6InlFVXdtWFdMMTA3Q2MtN1FaMldTYmVPYjNzUSIsImtpZCI6InlFVXdtWFdMMTA3Q2MtN1FaMldTYmVPYjNzUSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvM2ZmZTY1MWUtMTVkMy00NWYyLThmODctM2E1MWM4NzhjMDFlLyIsImlhdCI6MTc2MTgzMDc4NiwibmJmIjoxNzYxODMwNzg2LCJleHAiOjE3NjE4MzUwMDQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVVFBdS84YUFBQUFOK3M5UWtCY1VpSlZ6Tk50QWRYdC9NSWRjeDh3ZWlrdXFqaFlJYjFqeEVFSFh5aVYxY1E4NXd6VE9IMVgyVVpUbEFvTDY4QW9vUGdJclZQMUtQcnJ6dz09IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjE4ZmJjYTE2LTIyMjQtNDVmNi04NWIwLWY3YmYyYjM5YjNmMyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQSBLIiwiZ2l2ZW5fbmFtZSI6IkZhcmhhbiIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjU5LjE4Mi45My4xNTYiLCJuYW1lIjoiRmFyaGFuIEEgSyIsIm9pZCI6Ijg5ZDljOWEyLTQzMDMtNGMwOC1hYmJkLTAxNjcxY2EyNzljMSIsInB1aWQiOiIxMDAzMjAwNTNGN0NGRjI4IiwicmgiOiIxLkFiNEFIbVgtUDlNVjhrV1BoenBSeUhqQUhna0FBQUFBQUFBQXdBQUFBQUFBQUFCLUFVVy1BQS4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb25uZWN0aW9uLlJlYWQuQWxsIENvbm5lY3Rpb24uUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBJdGVtLkV4ZWN1dGUuQWxsIEl0ZW0uRXh0ZXJuYWxEYXRhU2hhcmUuQWxsIEl0ZW0uUmVhZFdyaXRlLkFsbCBJdGVtLlJlc2hhcmUuQWxsIE9uZUxha2UuUmVhZC5BbGwgT25lTGFrZS5SZWFkV3JpdGUuQWxsIFBpcGVsaW5lLkRlcGxveSBQaXBlbGluZS5SZWFkLkFsbCBQaXBlbGluZS5SZWFkV3JpdGUuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFJlcHJ0LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGFnLlJlYWQuQWxsIFRlbmFudC5SZWFkLkFsbCBUZW5hbnQuUmVhZFdyaXRlLkFsbCBVc2VyU3RhdGUuUmVhZFdyaXRlLkFsbCBXb3Jrc3BhY2UuR2l0Q29tbWl0LkFsbCBXb3Jrc3BhY2UuR2l0VXBkYXRlLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWRXcml0ZS5BbGwiLCJzaWQiOiIwMDlkMzI0OS01NDhjLTZiYWMtZmIwYi0wMmU1MDNhNzE4NWUiLCJzdWIiOiJLRXNzUHFLRnkwMlFUX2RKbkJNZ0VYaXI3U19sUDVSUVotSFBpLW1oQklNIiwidGlkIjoiM2ZmZTY1MWUtMTVkMy00NWYyLThmODctM2E1MWM4NzhjMDFlIiwidW5pcXVlX25hbWUiOiJtdWhhbW1lZC5mYXJoYW5AYWRpdGktbGxjLmNvbSIsInVwbiI6Im11aGFtbWVkLmZhcmhhbkBhZGl0aS1sbGMuY29tIiwidXRpIjoiZGRPLXV0Y1dFVUNjdTRVQVVEQzJBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19hY3RfZmN0IjoiMyA1IiwieG1zX2Z0ZCI6ImZhWmRlSDVkZlVQWWF4azM1OTRSaUNMMVgwQnJnUU9QMVlvZDQwa1hNMzBCWVhOcFlYTnZkWFJvWldGemRDMWtjMjF6IiwieG1zX2lkcmVsIjoiMzAgMSIsInhtc19wbCI6ImVuLVVTIiwieG1zX3N1Yl9mY3QiOiIzIDYifQ.M-yVrneFzeIsTYxTZFvnh9dLG1mCfDXUe54PYbt5ozlupjznHKtMbTQIHeNP0R7vJoggk7r-ccVutpBD5YvgSZCcq3owBxaIFDHhTINRBI1t0QXWaBcBnUnMoHQ4Ool5PZY6i3OCJCzEHnMQXF4kw8mQjQQ_26BzVUaGoNMEd1eEYuwM22Jeyuq6NRDfppVjtfBUhJO7OiCBGCC0ARDy5TR6SdAp45plZuBfsm5dXWqK-tBRFO0qk0AVoIsZNqG3rHxcu6eVLbyLJ-7xDff0niIQmjgcfkvDGLoMbTMGNKttjMGD_EXNMnVpWmVaULUTzAZ1roUFy_1OLYaYQoo64Q",
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
