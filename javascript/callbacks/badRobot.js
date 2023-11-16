const checkVersion = (v) => v >= 43;

function getFirstBadVersion(checkVersion, currentVersion) {
  let brokenVer = 1;

  for (let i = 1; i < currentVersion; i++) {

    if (checkVersion(i)) {
      brokenVer = i;
      break;
    }
  }

  return brokenVer;
}

getFirstBadVersion(checkVersion, 786);
