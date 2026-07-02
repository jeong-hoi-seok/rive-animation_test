# AGENTS.md

이 프로젝트의 모든 에이전트는 공통 위키를 참조해 작업한다.

- 연동돼 있으면 `./frontend-wiki/20_wiki/index.md`를 직접 열어 읽는다.
- 아직 연동 안 됐으면 위키 `20_wiki/operations/agent-instruction-guide.md`의
  "위키 연동" 절차를 따라 연동한 뒤 진행한다.

## git 규칙 (필수)

`main`에 직접 커밋·push 금지(예외 없음). "커밋/푸시 해줘"만 말해도 묻지 말고 작업 브랜치부터 만든다.
커밋 전 `git branch --show-current`로 확인하고, `main`이면 작업 브랜치(`feat/...`·`fix/...`·`docs/...`)를 만들어 이동한 뒤 진행한다. 반영은 작업 브랜치 → PR/MR.
