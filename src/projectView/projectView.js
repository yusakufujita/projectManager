import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase"; // Firebase設定ファイルをインポート

const ProjectTitles = () => {
  const [projects, setProjects] = useState([]); // タイトルリスト用の状態

  useEffect(() => {
    // Firestoreからデータをリアルタイムで取得
    const q = query(collection(db, "projects"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectList = snapshot.docs.map((doc) => ({
        id: doc.id, // ドキュメントID（FirestoreのユニークID）
        title: doc.data().title, // Firestoreのtitleフィールド
        tag: doc.data().tag || "タグなし", // Firestoreのtagフィールド（なければ「タグなし」）
        unitPrice: doc.data().unitPrice,
        employmentType: doc.data().employmentType,
        station: doc.data().station,
        skill: doc.data().skill,
        job: doc.data().job,
        responsibleProcess: doc.data().responsibleProcess,
        contents: doc.data().contents,
        needSkill: doc.data().needSkill,
        welcomeSkill: doc.data().welcomeSkill,
        devEnv: doc.data().devEnv,
        workingDays: doc.data().workingDays,
        settlement: doc.data().settlement,
        paymentSite: doc.data().paymentSite,
        numMeetings: doc.data().numMeetings,
        startTime: doc.data().startTime,
        recruitNum: doc.data().recruitNum,
        teamSize: doc.data().teamSize,
        workType: doc.data().workType,
        projectFeatures: doc.data().projectFeatures,
        avgTime: doc.data().avgTime
      }));
      setProjects(projectList); // 取得したタイトルを状態に保存
    });

    return () => unsubscribe(); // コンポーネントのクリーンアップ時にリスナーを解除
  }, []);

  return (
    <div>
      <h1>案件一覧</h1>
      <ul>
        {projects.map((project) => (
          <div key={project.id} style={{ marginBottom: "16px" }}>
            <span style={{ fontWeight: "bold", color: "blue" }}>{project.tag}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.title}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.unitPrice}万円/月額</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.employmentType}</span> <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.station}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.skill}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【募集職種】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.job}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【担当工程】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.responsibleProcess}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【案件の内容】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.contents}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【求めるスキル】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.needSkill}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【歓迎スキル】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.welcomeSkill}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【開発環境】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.devEnv}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【稼働日数】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.workingDays}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【精算】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.settlement}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【支払いサイト】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.paymentSite}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【商談回数】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.numMeetings}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【開始時期】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.startTime}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【募集人数】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.recruitNum}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【チーム規模】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.teamSize}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【稼働形態】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.workType}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【案件の特徴】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.projectFeatures}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【平均稼働時間】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.avgTime}</span>

          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProjectTitles;
