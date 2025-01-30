import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../projectView/firebase"; // Firebase設定ファイルをインポート

const ProjectTitles = () => {
  const [projects, setProjects] = useState([]); // タイトルリスト用の状態

  useEffect(() => {
    // Firestoreからデータをリアルタイムで取得
    const q = query(collection(db, "projects"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectList = snapshot.docs.map((doc) => ({
        id: doc.id, // ドキュメントID（FirestoreのユニークID）
        title: doc.data().title, // Firestoreのtitleフィールド
        unitPrice: doc.data().unitPrice,
        skill: doc.data().skill,
        contents: doc.data().contents,
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
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.title}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【使用技術】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.skill}</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【金額】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.unitPrice}万円/月額</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>【案件の内容】</span>
            <br />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>{project.contents}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProjectTitles;
