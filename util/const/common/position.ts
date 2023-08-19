export const POSITION = {
    RequirementAnalysis: 1,
    RequirementDefinition: 2,
    BasicOrPreliminaryDesign: 4,
    DetailedDesign: 8,
    Implementation: 16,
    ComprehensiveTest: 32,
    Maintenance: 64,
    Operation: 128,
}

export const POSITION_NAMES = {
    [POSITION.RequirementAnalysis]: 'Requirement Analysis',
    [POSITION.RequirementDefinition]: 'Requirement Definition',
    [POSITION.BasicOrPreliminaryDesign]: 'Basic or Preliminary Design',
    [POSITION.DetailedDesign]: 'Detailed Design',
    [POSITION.Implementation]: 'Implementation',
    [POSITION.ComprehensiveTest]: 'Comprehensive Test',
    [POSITION.Maintenance]: 'Maintenance',
    [POSITION.Operation]: 'Operation',
}

// 카테고리 1: 0000 0001 (1 in decimal)
// 카테고리 2: 0000 0010 (2 in decimal)
// 카테고리 3: 0000 0100 (4 in decimal)
// 카테고리 4: 0000 1000 (8 in decimal)
// 카테고리 5: 0001 0000 (16 in decimal)
// 카테고리 6: 0010 0000 (32 in decimal)
// 카테고리 7: 0100 0000 (64 in decimal)
// 카테고리 8: 1000 0000 (128 in decimal)
